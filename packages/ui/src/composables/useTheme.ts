import { ref, computed, watchEffect } from 'vue';

const THEME_STORAGE_KEY = 'cv-generator-theme';
const DEFAULT_THEME = 'light';
const AVAILABLE_THEMES = ['light', 'dark'] as const;

type ThemeType = typeof AVAILABLE_THEMES[number];

// État réactif du thème
const currentTheme = ref<ThemeType>(getInitialTheme());

/**
 * Récupère le thème initial en se basant sur :
 * 1. Le thème stocké dans localStorage
 * 2. Les préférences du système d'exploitation via prefers-color-scheme
 * 3. Le thème par défaut (light)
 */
function getInitialTheme(): ThemeType {
  // Vérifier d'abord dans le localStorage
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null;
  if (savedTheme && AVAILABLE_THEMES.includes(savedTheme as ThemeType)) {
    return savedTheme as ThemeType;
  }

  // Ensuite vérifier les préférences du système
  if (window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) {
    return 'dark';
  }

  // Par défaut, utiliser le thème clair
  return DEFAULT_THEME;
}

/**
 * Applique le thème actuel au document en définissant l'attribut data-theme
 */
function applyTheme(theme: ThemeType): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

// Observer les changements de thème et les appliquer
watchEffect(() => {
  applyTheme(currentTheme.value);
});

/**
 * Définit le thème actuel
 */
function setTheme(theme: ThemeType): void {
  if (AVAILABLE_THEMES.includes(theme)) {
    currentTheme.value = theme;
  } else {
    console.warn(`Theme "${theme}" not available. Using default theme.`);
    currentTheme.value = DEFAULT_THEME;
  }
}

/**
 * Bascule entre les thèmes disponibles
 */
function toggleTheme(): void {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
}

/**
 * Vérifie si un thème est actif
 */
const isThemeActive = computed(() => (theme: ThemeType) => currentTheme.value === theme);

/**
 * Service de gestion de thème
 */
export const useTheme = () => {
  return {
    currentTheme,
    isThemeActive,
    setTheme,
    toggleTheme,
    availableThemes: AVAILABLE_THEMES,
  };
}; 