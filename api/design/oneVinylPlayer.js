function oneVinylPlayer(album) {
  return `
    <svg width="430" height="400" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="430" height="400">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .background-github {
              background-color: #0D1117;
              height: 400px;
              width: 430px;
            }
            .post-it {
              width:220px;
              height:80px;
              position:absolute;
              top: 225px;
              left: 155px;
              transform: rotate(-12deg);
              z-index: 101;
              background:#ffa;
              overflow:hidden;
              margin:30px auto;
              padding:20px;
              border-radius: 0px 4px 1px 30px/45px;
              box-shadow:
                inset 0 -40px 50px rgba(0,0,0,0.2),
                inset 0 4px 10px rgba(0,0,0,0.2),
                0 5px 6px 5px rgba(0,0,0,0.2);
              font-family: Segoe UI, Ubuntu, sans-serif;
              font-style: normal;
              -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
            }
            .post-it:before {
              content:"";
              display:block;
              position:absolute;
              width:20px;
              height:25px;
              background:#ffa;
              box-shadow:
                3px -2px 10px rgba(0,0,0,0.2),
                inset 15px -15px 15px rgba(0,0,0,0.3);
              left:0;
              bottom:0;
              z-index:2;
              transform:skewX(25deg);
            }
            .album {
              color: #000000;
              font-weight: 700;
              font-size: 18px;
              text-align: center;
              line-height: 20px;
              margin: 6px 0 0 0;
            }
            .artist {
              font-weight: 400;
              color: #000000;
              font-size: 15px;
              text-align: center;
              line-height: 18px;
              margin-top: 6px;
            }
            .record-player {
              width: 360px;
              height: 300px;
            }
            .plinth {
              background-image: url(data:image/webp;base64,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);
              background-blend-mode: soft-light;
              background-color: #724600;
              width: 360px;
              height: 300px;
              border-radius: 30px;
            }
            .knob {
              content:"";
              height: 36px;
              width: 36px;
              border-radius: 50%;
              position: absolute;
              background-color: #000000;
              top: 202px;
              left: 289px;
            }
            .knob:before {
              content:"";
              height: 5px;
              width: 5px;
              border-radius: 50%;
              position: absolute;
              background-color: #868686;
              top: 7px;
              left: 7px;
            }
            .platter {
              position: absolute;
              border-radius: 50%;
              width: 256px;
              height: 256px;
              background-color: #222222;
              z-index:2;
              top:22px;
              left:22px;
            }
            .vinyl {
              position: absolute;
              border-radius:50%;
              width:250px;
              height:250px;
              z-index:5;
              top:25px;
              left:25px;
              overflow: hidden;
            }
            .headshell {
              width: 20px;
              height: 205px;
              position: absolute;
              border-right: 10px solid #353535;
              border-bottom: 10px solid #353535;
              border-bottom-right-radius: 50px;
              z-index:15;
              left: 250px;
              top: 20px;
              transform: rotate(23deg);
              box-shadow: 2px 2px 3px rgba(0,0,0,.4);
            }
            .headshell:before, .headshell:after {
              content:"";
              position: absolute;
            }
            .headshell:before {
              background-color: #000000;
              width:20px;
              height:30px;
              top:-4px;
              left:14px;
              box-shadow: 2px 2px 3px rgba(0,0,0,.4);
            }
            .headshell:after {
              height:0px;
              width:15px;
              background-color: #000000;
              border-top: 30px solid #000000;
              border-right: 1px solid transparent;
              border-left: 1px solid transparent;
              top:196px;
              left:-2px;
              transform: rotate(50deg);
              box-shadow: 4px 4px 10px rgba(0,0,0,.4);
            }
            .text {
              text-align: center;
              position: absolute;
              z-index: 100;
              font-family: Segoe UI, Ubuntu, sans-serif;
              font-style: normal;
              top: 260px;
              left: 200px;
              transform: rotate(-10deg);
              background-color: #FFF576;
              padding: 30px 20px 10px 20px;
              height: 100px;
              display: flex;
              flex-direction: column;
            }
            .cover {
              position: absolute;
              z-index:16;
              opacity: 0;
              animation: fade-in-up-scale 1.0s forwards;
              border-radius: 50%;
              width: 220px;
              height: 220px
            }
            .rotate {
              animation: loading 16s linear infinite;
            }
            @keyframes loading {
              0% {
                transform: rotate(0);
                opacity: 1;
              }
              100% {
                transform: rotate(360deg);
                opacity: 1;
              }
            }
          </style>
          <div class="background-github">
            <div class="record-player">
              <div class="headshell"></div>
              <div class="plinth"></div>
              <div class="knob"></div>
              <div class="platter"></div>
              <a href="${album[4]}">
                <img class="vinyl rotate" src="${album[0]}" />
              </a>
            </div>
            <div class="post-it">
              <p class="album">${album[1]}</p>
              <p class="artist">
                <span>${album[2]}</span>
                <span style="font-size:16px"> • </span>
                <span>${album[3]}</span>
              </p>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  `;
}

module.exports = { oneVinylPlayer };
