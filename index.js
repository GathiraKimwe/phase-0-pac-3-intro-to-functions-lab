function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    const newString = string.toUpperCase();
  
    if (string === newString) {
      return "YES INDEED!";
    } else if (string == "Let's have dinner together!") {
        return "I would love to!";
    } else {
      return "I can't hear you!";
    }
  }