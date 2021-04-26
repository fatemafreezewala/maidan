import I18n from 'react-native-i18n'
import ar from './locales/ar'
import en from './locales/en'

I18n.fallbacks = true

I18n.translations = {
	en,
	ar,
}
// I18n.locale = 'spanish';

export default I18n
