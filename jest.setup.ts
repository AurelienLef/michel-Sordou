// Les matchers jest-native sont intégrés depuis @testing-library/react-native v12+
import '@testing-library/react-native/extend-expect';

// Mock global de modules natifs non disponibles dans l'env Jest (Node.js)
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), back: jest.fn() }),
  useLocalSearchParams: () => ({}),
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);