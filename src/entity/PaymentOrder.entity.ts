import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";

@Entity("paymentOrder") // 表名
export class PaymentOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column()
    /** 外部订单号 */
    outTradeNo: string;

    @Column()
    /** 商品名称 */
    subject: string;

    @Column()
    /** 业务标识前缀 */
    businessFlagPrefix: string;

    @Column()
    /** 扫码支付的二维码内容 */
    qrCode: string;

    @Column({ type: "decimal", precision: 8, scale: 2 })
    /** 金额（元） */
    totalAmount: number;

    @Column()
    /** 交易状态 */
    tradeStatus: string;

    @Column({ nullable: true })
    /** 付款时间 */
    paymentDate: Date;

    @Column({ nullable: true })
    /** 支付宝交易号 */
    tradeNo: string;

    @Column({ nullable: true })
    /** 支付成功的各个渠道金额信息 */
    fundBillList: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @VersionColumn()
    version: number;
}
