import leftPad from 'left-pad';

function justifyArrayLines(args) {
  const lines = args.lines || [];

  return { padded: lines.map(line => leftPad(line, 50, " ")) }
}

export const main = justifyArrayLines