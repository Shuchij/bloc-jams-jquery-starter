class Helper {

  playPauseAndUpdate (song) {

    // Call player.playPause
    player.playPause(song);

    // Get song duration value and add it as text for div named total-time
    $('#time-control .total-time').text(song.duration);
  }

}

const helper = new Helper();
