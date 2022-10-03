import { InMemoryCache } from '@apollo/client'
import { searchQueryVar } from '.'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _searchQuery: {
          read() { return searchQueryVar() }
        },
        users: {
          keyArgs: false,
          merge: false,
          read(existing, { args, readField }) {
            if(existing && existing.length && !!args.query) {
              return existing.filter(userRef => {
                const userName = readField('name', userRef);
                const userEmail = readField('email', userRef);
                const userPhone = readField('phone', userRef);
                return (
                  userName.toLowerCase().includes(args.query.toLowerCase()) 
                  || userEmail.toLowerCase().includes(args.query?.toLowerCase())
                  || userPhone.toLowerCase().includes(args.query?.toLowerCase())
                )
              });
            }
            return existing;
          }
        }
      }
    },
    
  }
})