export const localeFormattedString = (string, locale = 'en-IN', options) => {
    let transformedValue = string?.toLocaleString(locale, options) || string
    return transformedValue?.split('.')?.[0] || transformedValue
};
