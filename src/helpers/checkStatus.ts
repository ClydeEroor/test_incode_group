export const CheckStatus = (status: string) => {
  if (status === 'Alive') {
    return 'bg-[#55CC44]';
  }
  if (status === 'Dead') {
    return 'bg-[#D63D2E]';
  }
  return 'bg-[#9E9E9E]';
};
