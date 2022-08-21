/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

const enTranslationMessages = require('./translations/en.json');
const deTranslationMessages = require('./translations/de.json');
const esTranslationMessages = require('./translations/es.json');
const idTranslationMessages = require('./translations/id.json');
const zhTranslationMessages = require('./translations/zh.json');
const arTranslationMessages = require('./translations/ar.json');

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'zh',
  'ar',
  'id',
  'de',
  'es',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  id: formatTranslationMessages('id', idTranslationMessages),
  zh: formatTranslationMessages('zh', zhTranslationMessages),
  ar: formatTranslationMessages('ar', arTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
