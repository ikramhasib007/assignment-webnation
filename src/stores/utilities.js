export function cursorTakePaginatedFieldPolicy() {
  return {
    keyArgs: false,
    merge(existing, incoming, { args = {}, readField }) {
      const merged = existing ? existing.slice(0) : [];
      // Obtain a Set of all existing item IDs.
      const existingIdSet = new Set(
        merged.map(item => readField("id", item)));
      // Remove incoming items already present in the existing data.
      incoming = incoming.filter(
        item => !existingIdSet.has(readField("id", item)));
      // Find the index of the item just before the incoming page of items.
      const afterIndex = merged.findIndex(
        item => args?.cursor === readField("id", item));
      if (afterIndex >= 0) {
        // If we found afterIndex, insert incoming after that index.
        merged.splice(afterIndex + 1, 0, ...incoming);
      } else {
        // Otherwise, insert incoming at the beginning of the existing data.
        merged.splice(0, 0, ...incoming);
      }
      return merged
    },

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
  };
}