# 護衛君常舒 IgY 益生菌 Landing Page Preview

此專案為淨旦生技「護衛君常舒 IgY 益生菌」的 **預覽版 Landing Page**。
重點是可預覽、可修改、可部署到 Vercel，非正式銷售站。

## 技術棧
- Vite
- React + TypeScript
- Tailwind CSS

## 專案啟動
```bash
npm install
npm run dev
```
啟動後預設網址：`http://localhost:5173`

## Build
```bash
npm run build
```

## Vercel 部署
1. 將此 repo push 到 Git 平台（GitHub/GitLab/Bitbucket）。
2. 進入 Vercel 建立新專案並匯入 repo。
3. Framework Preset 選擇 **Vite**。
4. Build Command：`npm run build`
5. Output Directory：`dist`
6. Install Command：`npm install`
7. Deploy。

## 圖片資源說明
商品圖請放在：`public/assets/product/`

預期檔名：
- `product-flat-box-stick.webp`
- `product-box-stick-powder.webp`
- `product-stick-powder.webp`
- `product-box-standing.webp`
- `product-open-box-cup.webp`
- `product-spilled-box-sticks.webp`

若檔案缺少，頁面會顯示 placeholder：「產品圖待上傳」。

### 目前缺少的商品圖片
- `product-flat-box-stick.webp`
- `product-box-stick-powder.webp`
- `product-stick-powder.webp`
- `product-box-standing.webp`
- `product-open-box-cup.webp`
- `product-spilled-box-sticks.webp`

## 備註
- CTA 連結目前為 `TODO_LINK`。
- 不含購物車、付款、後台或表單串接。
