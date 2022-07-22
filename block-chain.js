// eslint-disable-next-line no-unused-vars
const blockChain = (data, prev = { index: 0, hash: '0' }) => {
  const block = {
    data,
    prev,
  };

  block.index = block.prev.index + 1;
  block.hash = hashCode(block.index + prev.hash + JSON.stringify(data));
  // eslint-disable-next-line no-shadow
  block.chain = (data) => blockChain(data, block);
  return block;
};

const first = blockChain({ a: 1 });
const second = first.chain({ hello: 'world' });
const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' });

console.log(chain.hash);
console.log(chain.index);
