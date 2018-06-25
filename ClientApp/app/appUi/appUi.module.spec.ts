import { AppUiModule } from "./appUi.module";

describe('ThemeModule', () => {
  let themeModule: AppUiModule;

  beforeEach(() => {
    themeModule = new AppUiModule();
  });

  it('should create an instance', () => {
    expect(themeModule).toBeTruthy();
  });
});
