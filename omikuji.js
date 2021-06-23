(() => {
  let roulette;
  let result = ["大吉", "中吉", "末吉", "小吉", "凶", "大凶"];
  const $doc = document;
  const $startButton = $doc.getElementById("js-start");
  const $stopButton = $doc.getElementById("js-stop");
  const $roulette = $doc.getElementById("roulette");
  const resultLen = result.length;

  function start() {
    roulette = setInterval(() => {
      let idx = Math.floor(Math.random() * 6);
      $roulette.textContent = result[idx];
    }, 50);
  }

  function stop() {
    if (roulette) {
      clearInterval(roulette);
    }
  }

  $startButton.addEventListener("click", (e) => clickHandler(e));
  $stopButton.addEventListener("click", (e) => clickHandler(e));

  const clickHandler = (e) => {
    e.preventDefault();

    if (e.target.id == "js-start") {
      console.log("start");
      start();
    } else if (e.target.id == "js-stop") {
      console.log("stop");
      stop();
    }
  };
})();
