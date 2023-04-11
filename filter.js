function createTabMenu(tabNames, tabContents) {
  if (Array.isArray(tabNames) && Array.isArray(tabContents)) {
    tabNames.filter((element) => {
      if (typeof element !== "string") {
        console.error(
          "createTabMenu의 첫번째 인자는 문자열 배열이어야 합니다."
        );
      }
    });

    tabContents.filter((element) => {
      if (typeof element !== "string") {
        console.error(
          "createTabMenu의 두번째 인자는 문자열 배열이어야 합니다."
        );
      }
    });

    /*
     * 1. array.isArray() 메서드를 사용하여 tabNames와 tabContents가 배열인지 확인
     * 2. tabNames와 tabContents의 요소가 모두 문자열인지 확인
     * 3. 해당 주석부분 위는 모두 "원하는 타입으로 구성되어야만" 실행할 수 있도록 구현
     * 4. 해당 주석부분 아래 부터는 제작할 탭메뉴의 기능들을 구현
     */
  } else {
    console.error(
      "createTabMenu에서 요구하는 두개의 인자는 모두 배열이어야 합니다."
    );
  }
}
