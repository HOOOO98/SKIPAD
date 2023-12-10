// 광고 스킵 버튼을 클릭하는 함수
function clickSkipButton() {
  const skipButton = document.querySelector(
    ".ytp-ad-skip-button-modern.ytp-button"
  );
  if (skipButton) {
    skipButton.click();
  }
}

// 페이지가 로드되면 광고 스킵 버튼을 5초마다 찾아서 클릭합니다.
window.addEventListener("load", () => {
  setInterval(clickSkipButton, 5000);
});
