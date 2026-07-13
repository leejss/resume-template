# Resume Engine

YAML 이력서 데이터와 선택적인 Markdown 문자열을 Eleventy와 Nunjucks로 렌더링해 정적 HTML을 생성합니다.

저장소에 포함된 이력서 내용은 템플릿 미리보기용 가상 데이터이며 실제 인물, 조직, 프로젝트와 무관합니다. `src/_data/resume.yaml`을 복사해 자신의 데이터로 교체하십시오.

## 명령어

```bash
npm install
npm run dev
npm run build
```

- 콘텐츠: `src/_data/resume.yaml`
- HTML 템플릿: `src/index.njk`
- 스타일: `src/styles/resume.css`
- 이미지: `src/public/`
- 빌드 결과: `dist/`

`dist/`는 생성물입니다. 직접 수정하지 마십시오.
