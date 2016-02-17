var cat = {
  name: "Frisky 'Cornelius' McWhiskertons",
  pastimes: "chasing red dots, judging silly humans, and sitting on keyboards",
  start: function() {
    var self = this;
    var catImage = document.getElementById("laser_cat");
    catImage.addEventListener("click", function() {
      console.log("My name is " + self.name + " and I like " + self.pastimes);
    });
  }
}

cat.start();
