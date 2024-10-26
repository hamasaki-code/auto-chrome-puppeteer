const puppeteer = require('puppeteer-core');

(async () => {
  // Chromeの実行ファイルパスを指定する
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1391, height: 842 });

  // 指定したURLにアクセス
  await page.goto('https://movie.hanshintigers.jp/tm/login', { waitUntil: 'networkidle2' });

  // ログインフォームにユーザー名とパスワードを入力
  await page.type('#mail', 'メールアドレス'); // ユーザー名入力欄のセレクタと値
  await page.type('#pass', 'パスワード'); // パスワード入力欄のセレクタと値

  // ログインボタンをクリック
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }), // ページのリダイレクトを待つ
    page.click('.select__login-btn'), // ログインボタンのセレクタを指定
  ]);

  // ログイン後に指定したページに移動
  await page.goto('https://movie.hanshintigers.jp/index.html#mypage', { waitUntil: 'networkidle2' });

  // スクリーンショットを保存
  await page.screenshot({ path: '/Users/~/puppeteer-test/images/specified_page.png', fullPage: true });

  // ブラウザを閉じる
  await browser.close();
})();
