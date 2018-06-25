import { PromptModule } from './prompt.module';

describe('PromptModule', () => {
  let promptModule: PromptModule;

  beforeEach(() => {
    promptModule = new PromptModule();
  });

  it('should create an instance', () => {
    expect(promptModule).toBeTruthy();
  });
});
