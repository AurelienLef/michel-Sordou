/** @type {import('jest').Config} */
const config = {
  preset: 'jest-expo',

  // Fichier de setup lancé après l'initialisation du framework de test
  setupFilesAfterFramework: ['./jest.setup.ts'],

  // Nécessaire pour que Jest transforme les packages React Native / Expo en ESM
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@tanstack/.*)',
  ],

  // Alias de chemin (si tu as un tsconfig avec paths)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Couverture de code
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
    '!src/app/**',
    '!src/assets/**',
  ],

  // Seuils de couverture (adapte selon ta maturité)
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};

module.exports = config;