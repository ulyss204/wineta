import { WinetaPage } from './app.po';

describe('wineta App', function() {
  let page: WinetaPage;

  beforeEach(() => {
    page = new WinetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
