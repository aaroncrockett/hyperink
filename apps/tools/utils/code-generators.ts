import { capitalize } from "@hyperinkstudio/utils";

const useStateCode = (variableName: string) => {
  return `const [${variableName}, set${capitalize(
    variableName,
  )}] = useState<string>('');`;
};

const simpleLogCode = (message: string) => {
  return `console.log('${message}');`;
};

export const codeGenerators = {
  useState: useStateCode,
  simpleLog: simpleLogCode,
} as const;

export type GeneratorKey = keyof typeof codeGenerators;
