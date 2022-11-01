const { Buffer } = globalThis;

export default ({ file: { buffer }, options }) => {
  const source = buffer.toString();
  if (source.indexOf(options.errorText) > -1) throw new Error('No good!');

  return { buffer: Buffer.from('bar\n') };
};
