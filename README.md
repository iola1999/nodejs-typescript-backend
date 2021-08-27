# nodejs-typescript-backend

一个 Node.js 服务端项目。

## 环境

Node.js 10+

## 开发

```bash
yarn
yarn dev
```

## 相关配置

### typeorm

#### 连接

重命名 `ormconfig.json.example`，修改配置信息

#### 同步数据库架构

先检查：`yarn typeorm schema:log -c nodejs_backend`

再考虑同步：`yarn typeorm schema:sync -c nodejs_backend`

### 支付

#### 配置

重命名 `src/config/payment.example.DELETE.the.suffix`，修改其中的配置文件。

#### 支付状态回调内网穿透

开发过程中，可以用钉钉提供的 [https://github.com/open-dingtalk/pierced](https://github.com/open-dingtalk/pierced)

```bash
./ding -config=./ding.cfg -subdomain=yoursubname 3333
```

Windows 下：

```bash
./ding -config ./ding.cfg -subdomain yoursubname 3333
```
