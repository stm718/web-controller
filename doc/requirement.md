# 要件定義書

| バージョン | 日付 | 変更内容 | 担当者 |
| ---------- | ---- | -------- | ----- |
| 1.0.0      | 2021-08-28 | 初版作成 | 田中 |
| 2.0.0      | 2021-09-19 | STEP2の機能要件を追記 | 田中 |

- [1. 概要](#1-概要)
  - [1.1. システム構成図](#11-システム構成図)
  - [1.2. 背景](#12-背景)
  - [1.3. 定義](#13-定義)
- [2. 業務要件](#2-業務要件)
  - [2.1. 業務フロー](#21-業務フロー)
  - [2.2. 規模](#22-規模)
  - [2.3. 時期・時間](#23-時期時間)
  - [2.4. 指標](#24-指標)
  - [2.5. 範囲](#25-範囲)
- [3. 機能要件](#3-機能要件)
  - [3.1. 機能](#31-機能)
  - [3.2. 画面](#32-画面)
  - [3.3. 情報・データ・ログ](#33-情報データログ)
  - [3.4. 外部インタフェース](#34-外部インタフェース)
- [4. 非機能要件](#4-非機能要件)
  - [4.1. ユーザビリティおよびアクセシビリティ](#41-ユーザビリティおよびアクセシビリティ)
  - [4.2. システム方式](#42-システム方式)
  - [4.3. 規模](#43-規模)
  - [4.4. 性能](#44-性能)
  - [4.5. 信頼性](#45-信頼性)
  - [4.6. 拡張性](#46-拡張性)
  - [4.7. 上位互換性](#47-上位互換性)
  - [4.8. 継続性](#48-継続性)
- [5. セキュリティ要件](#5-セキュリティ要件)
- [6. 移行要件](#6-移行要件)
- [7. 運用要件](#7-運用要件)
  - [7.1. 教育](#71-教育)
  - [7.2. 運用](#72-運用)
  - [7.3. 保守](#73-保守)

## 1. 概要

- AWS側から送られてきた情報をグラフィカルに表示したい
- 圧力をメーター表示する
- リアルタイムに変更したい
- ブラウザからデバイスを操作する

### 1.1. システム構成図

<img width="1024" src="../img/arch.svg">

### 1.2. 背景

- AWSを利用したIoTアプリケーション開発を学習するため。

### 1.3. 定義

- デバイス：データを収集し、サーボモータを駆動させる。

## 2. 業務要件

### 2.1. 業務フロー

業務ではないため省略。

### 2.2. 規模

個人用。

### 2.3. 時期・時間

無期限。

### 2.4. 指標

なし。

### 2.5. 範囲

私の住居内。

## 3. 機能要件

### 3.1. 機能

| 大項目 | 小項目 |
| ------ | ------ |
| AWSから以下の情報を取得する | 温度 |
| - | 加速度 |
| - | 圧力 |
| 取得した情報をブラウザに表示する | - |
| ブラウザからデバイスを操作 | LEDのオンオフ |
| - | サーボモータの駆動 |

### 3.2. 画面

以下の画面を作成する。

- ログイン画面
- センサからのデータを表示する画面

### 3.3. 情報・データ・ログ

| データ項目 | 処理方法 |
| --- | --- |
| 温度 | 摂氏温度で棒グラフで表示 |

### 3.4. 外部インタフェース

- 温度グラフの表示領域
- LEDをオンオフするボタン
- ゲージでサーボモータの角度を設定

## 4. 非機能要件

### 4.1. ユーザビリティおよびアクセシビリティ

- 1クリックで画面を切り替えられる。
- センサのデータの変動がリアルタイムに確認できる。
- マウスのドラッグでサーボモータの角度を変えられる

### 4.2. システム方式

省略

### 4.3. 規模

私の住居内。

### 4.4. 性能

- 不快にならない程度の時間で画面切り替えが可能。
  - 具体的な閾値や目標はなし。
- ブラウザで角度を変更してから、1秒以内にサーボモータの角度が変わる

### 4.5. 信頼性

常識的な程度の信頼性

### 4.6. 拡張性

とくになし

### 4.7. 上位互換性

とくになし。

### 4.8. 継続性

とくになし。

## 5. セキュリティ要件

利用者・公開範囲は私のみのためとくに考えない。

## 6. 移行要件

移行の必要がないためとくに考えない。

## 7. 運用要件

### 7.1. 教育

利用者が私のみのため不要。

### 7.2. 運用

省略。

### 7.3. 保守

省略。
