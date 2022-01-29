function past(h: number, m: number, s: number): number {
    const ms = s * 1000;
    const mm = m * 60 * 1000;
    const hm = h * 60 * 60 * 1000;

    const result = ms + mm + hm;
    return result
  }

