export const timeState = {
    is12h: localStorage.getItem('is12h') ?? true, 
    currentTimeZone: localStorage.getItem('timeZone') ?? undefined
};
