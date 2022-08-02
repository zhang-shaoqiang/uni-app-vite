import { useI18n } from 'vue-i18n';

export default function useToggleLocale() {
  const { locale } = useI18n();

  /** 语言列表 */
  const locales = [
    {
      text: '🇨🇳简体中文',
      code: 'zh-Hans'
    },
    {
      text: '🇭🇰繁體中文',
      code: 'zh-Hant'
    },
    {
      text: '🇺🇸English',
      code: 'en'
    },
    {
      text: '🇫🇷Français',
      code: 'fr'
    },
    {
      text: '🇪🇸Español',
      code: 'es'
    },
    {
      text: '🇯🇵日本語',
      code: 'ja'
    }
  ];

  /**
   * 切换语言
   */
  const toggleLocale = () => {
    uni.showActionSheet({
      itemList: locales.map((item) => item.text),
      success: ({ tapIndex }) => {
        locale.value = locales[tapIndex].code;
        /* #ifdef APP-PLUS || H5 */
        uni.setLocale(locales[tapIndex].code);
        /* #endif */
      }
    });
  };

  return {
    toggleLocale
  };
}
