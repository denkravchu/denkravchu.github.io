
    var animationDuration = 1.5;
    var ListCount = 8;

    var List = 1;
    var loading = false;

    function NextPage() {
      if (loading) return;
      loading = true;

      if (List < 1 || List >= ListCount) {
        loading = false;
        return;
      }

      let ListElement = document.getElementById(List);

      ListElement.style.transition = `transform ${animationDuration/2}s ease-in`
      ListElement.style.transform = "rotateY(90deg)";

      List += 1;

      setTimeout(() => {
        ListElement.style.zIndex = ListCount - ListElement.style.zIndex + 1;
        ListElement.style.transition = `transform ${animationDuration/2}s ease-out`
        ListElement.style.transform = "rotateY(0deg)";
        loading = false;
      }, animationDuration * 1000 / 2)
    }

    function PreviousPage(){
      if (loading) return;
      loading = true;

      if (List <= 1 || List > ListCount + 1) {
        loading = false;
      }

      let ListElement = document.getElementById(List - 1);

      ListElement.style.transition = `transform ${animationDuration/2}s ease-in`
      ListElement.style.transform = "rotateY(90deg)";

      List -= 1;

      setTimeout(() => {
        ListElement.style.zIndex = ListCount - ListElement.style.zIndex + 1;
        ListElement.style.transition = `transform ${animationDuration/2}s ease-out`
        ListElement.style.transform = "rotateY(180deg)";
        loading = false;
      }, animationDuration/2 * 1000)
    }

    function OpenPage (requiredPageNumber) {
      if (loading) return;
      loading = true;

      // проверка на четность
      if ( requiredPageNumber & 1 ) {
        requiredList = (requiredPageNumber + 1) / 2;
      } else {
        requiredList = requiredPageNumber / 2 + 1;
      }

      if (requiredList === List) {
        loading = false;
        return;
      };

      if (requiredList < List) {
        var ListOfset = List - requiredList;

        if (ListOfset === 1) {
          loading = false;
          PreviousPage();

        } else {
          // прячем листы которые автоматически перевернутся
          for (var i = requiredList + 1; i < List - 1; i++) {
            document.getElementById(i).style.display = 'none';
          }

          // переворачиваем первую необходимую и последнюю страницу (чтобы было по красоте)
          var flipLists = [
            document.getElementById(List - 1),
            document.getElementById(requiredList)
          ];

          flipLists.forEach(elem => {
            elem.style.transition = `transform ${animationDuration/2}s ease-in`
            elem.style.transform = "rotateY(90deg)";
          });

          setTimeout(() => {
            flipLists.forEach(elem => {
              elem.style.zIndex = ListCount - elem.style.zIndex + 1;
              elem.style.transition = `transform ${animationDuration/2}s ease-out`
              elem.style.transform = "rotateY(180deg)";
            });
          }, animationDuration * 1000 / 2)

          setTimeout(()=>{
            // вставляем листы которые автоматически перевернулись
            for (var i = requiredList + 1; i < List - 1; i++) {
              var element = document.getElementById(i);
              element.style.zIndex = ListCount - element.style.zIndex + 1;
              element.style.transition = "transform 0s"
              element.style.transform = "rotateY(180deg)";
              element.style.display = 'block';
            }

            loading = false;
            List = requiredList;
          }, animationDuration * 1000)

        }
      } else {
        var ListOfset = requiredList - List;

        if (ListOfset === 1) {
          loading = false;
          NextPage();

        } else {
          // прячем листы которые автоматически перевернутся
          for (var i = List + 1; i < requiredList - 1; i++) {
            document.getElementById(i).style.display = 'none';
          }

          // переворачиваем первую необходимую и последнюю страницу (чтобы было по красоте)
          var flipLists = [
            document.getElementById(requiredList - 1),
            document.getElementById(List)
          ];

          flipLists.forEach(elem => {
            elem.style.transition = `transform ${animationDuration/2}s ease-in`
            elem.style.transform = "rotateY(90deg)";
          });

          setTimeout(() => {
            flipLists.forEach(elem => {
              elem.style.zIndex = ListCount - elem.style.zIndex + 1;
              elem.style.transition = `transform ${animationDuration/2}s ease-out`
              elem.style.transform = "rotateY(0deg)";
            });
          }, animationDuration * 1000 / 2)

          setTimeout(() => {
            // вставляем листы которые автоматически перевернулись
            for (var i = List + 1; i < requiredList - 1; i++) {
              var element = document.getElementById(i);
              element.style.zIndex = ListCount - element.style.zIndex + 1;
              element.style.transition = "transform 0s"
              element.style.transform = "rotateY(0deg)";
              element.style.display = 'block';
            }

            loading = false;
            List = requiredList;
          }, animationDuration * 1000);
        }
      }
    }

    document.addEventListener('swiped-left', NextPage);
    document.addEventListener('swiped-right', PreviousPage);
