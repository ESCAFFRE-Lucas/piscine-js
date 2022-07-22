const getAcceleration = (obj) => {
  if (typeof obj.f && typeof obj.m === 'number') {
    return obj.f / obj.m;
  } if (typeof obj.Δv && typeof obj.Δt === 'number') {
    return obj.Δv / obj.Δt;
  } if (typeof obj.d && typeof obj.t === 'number') {
    return (2 * obj.d) / (obj.t ** 2);
  }
  return 'impossible';
};

console.log(getAcceleration({ f: 10, m: 2 }));
