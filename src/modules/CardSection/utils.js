export const localeFormattedString = (string, locale = 'en-IN', options) => {
    return string?.toLocaleString(locale, options) || string
};
