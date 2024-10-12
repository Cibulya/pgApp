interface MediaQuerias {
  phone: string;
  desktop: string;
  tablet: string;
}

export const mediaQuerias: MediaQuerias = {
  phone: '(max-width:640px)',
  desktop: '(min-width:1024px)',
  tablet: '(max-width:992px)',
};
