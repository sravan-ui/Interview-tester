import { InterviewTesterPage } from './app.po';

describe('interview-tester App', () => {
  let page: InterviewTesterPage;

  beforeEach(() => {
    page = new InterviewTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
