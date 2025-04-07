document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('workbook-form');
  const result = document.getElementById('result');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // 입력된 데이터 가져오기
      const functioning = form.functioning.value;
      const insight = form.insight.value;
      const question = form.question.value;

      // 저장 (로컬 저장소 사용)
      localStorage.setItem('functioning', functioning);
      localStorage.setItem('insight', insight);
      localStorage.setItem('question', question);

      // 폼 숨기고 결과 보여주기
      form.style.display = 'none';
      result.style.display = 'block';
    });
  }
});