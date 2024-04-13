  var toggleBtns = document.querySelectorAll(".toggle-btn");
    toggleBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var targetContent = document.getElementById(targetId);
            if (targetContent.style.display === "none") {
                targetContent.style.display = "block";
                this.textContent = "Weniger anzeigen";
            } else {
                targetContent.style.display = "none";
                this.textContent = "Mehr erfahren";
            }
        })
    });

