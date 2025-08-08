# AWS Solutions Architect Associate)
## AWS SAA (Solutions Architect Associate) Exam Study Note

## 1. Amazon EC2 (Elastic Compute Cloud)

- **適配情況**：當你需要靈活的虛擬伺服器來運行應用程式或服務時，EC2 是首選解決方案。EC2 提供多種實例類型（如計算優化型、記憶體優化型、GPU 實例等），可根據應用負載進行擴展。
- **英語說明**：EC2 provides scalable computing capacity in the AWS cloud, allowing users to easily launch virtual servers and scale them according to their needs.
- **Reference**: [EC2 Documentation](https://aws.amazon.com/ec2)

## 2. Amazon S3 (Simple Storage Service)

- **適配情況**：用於存儲和檔案備份的服務，特別是當需要高持久性和擴展能力時。適用於靜態網站託管、大數據分析、備份和恢復。
- **英語說明**：Amazon S3 is a scalable object storage service ideal for storing large amounts of unstructured data, with 99.999999999% durability and lifecycle policies for cost optimization.
- **Reference**: [S3 Documentation](https://aws.amazon.com/s3)

## 3. Amazon RDS (Relational Database Service)

- **適配情況**：需要使用傳統關聯式資料庫的應用程式可以使用 RDS，適用於需要高可用性和自動備份的資料庫，如 MySQL、PostgreSQL、MariaDB、SQL Server 和 Oracle。
- **英語說明**：RDS simplifies the setup, operation, and scaling of relational databases with automatic backups, software patching, and multi-AZ replication for high availability.
- **Reference**: [RDS Documentation](https://aws.amazon.com/rds)

## 4. Amazon DynamoDB

- **適配情況**：適合對於延遲敏感的應用程式，尤其是需要高可擴展性和無縫擴展的 NoSQL 資料庫，如遊戲資料儲存、IoT 資料儲存和行動應用程式。
- **英語說明**：DynamoDB is a fully managed NoSQL database that provides fast and predictable performance, and scales automatically to handle large amounts of data and requests.
- **Reference**: [DynamoDB Documentation](https://aws.amazon.com/dynamodb)

## 5. Amazon VPC (Virtual Private Cloud)

- **適配情況**：用於設計網路隔離的環境，適合需要高安全性的應用程式，可以透過設定私有子網、VPN、NAT Gateways 和防火牆規則來保護應用程式。
- **英語說明**：Amazon VPC allows you to launch AWS resources into a virtual network that you've defined, providing full control over your networking environment.
- **Reference**: [VPC Documentation](https://aws.amazon.com/vpc)

## 6. Amazon CloudFront

- **適配情況**：當需要分發靜態和動態內容，並降低延遲時，CloudFront 是一個理想的選擇，尤其是全球使用者分佈廣泛的應用程式。
- **英語說明**：CloudFront is a content delivery network (CDN) that speeds up the distribution of your static and dynamic web content, reducing latency and improving user experience.
- **Reference**: [CloudFront Documentation](https://aws.amazon.com/cloudfront)

## 7. Elastic Load Balancing (ELB)

- **適配情況**：適合需要將流量分散到多個實例的應用程式，幫助提升應用程式的可用性和擴展性。
- **英語說明**：ELB automatically distributes incoming application traffic across multiple EC2 instances to ensure high availability and fault tolerance.
- **Reference**: [ELB Documentation](https://aws.amazon.com/elasticloadbalancing)

## 8. Amazon SQS (Simple Queue Service)

- **適配情況**：適用於需要在分布式系統中處理任務隊列的應用程式，確保消息的可靠傳送，並能有效解耦系統元件。
- **英語說明**：SQS is a fully managed message queuing service that enables decoupling and scalability of microservices, ensuring reliable communication between components.
- **Reference**: [SQS Documentation](https://aws.amazon.com/sqs)

## 9. AWS Lambda

- **適配情況**：適合無伺服器計算模型的應用程式，當不想管理伺服器且希望根據實際需求執行代碼時，可以選擇Lambda。適用於事件驅動的架構，如文件處理、監控或 API。
- **英語說明**：AWS Lambda allows you to run code without provisioning or managing servers, scaling automatically in response to the number of requests.
- **Reference**: [Lambda Documentation](https://aws.amazon.com/lambda)

## 10. Amazon EBS (Elastic Block Store)

- **適配情況**：適合需要持久性儲存的 EC2 實例，提供高 I/O 性能以及快照備份功能，適用於數據庫應用程式或大型資料儲存需求。
- **英語說明**：EBS provides persistent block storage volumes for EC2 instances, optimized for transactional workloads such as databases and file systems.
- **Reference**: [EBS Documentation](https://aws.amazon.com/ebs)

## 11. Amazon CloudWatch

- **適配情況**：適合監控 AWS 資源和應用程式，幫助開發者自動觸發警報和執行響應行動，適用於即時監控系統健康狀態。
- **英語說明**：CloudWatch provides monitoring and observability for AWS resources and applications, collecting metrics, logs, and events to enable real-time insights and automated actions.
- **Reference**: [CloudWatch Documentation](https://aws.amazon.com/cloudwatch)

## 12. AWS IAM (Identity and Access Management)

- **適配情況**：適合需要精細化權限控制的應用程式，允許設定角色、使用者、群組和策略來確保安全性。
- **英語說明**：IAM allows you to securely control access to AWS services and resources for users and applications by defining fine-grained permission policies.
- **Reference**: [IAM Documentation](https://aws.amazon.com/iam)

## 13. Amazon Route 53

- **適配情況**：當需要管理域名並啟用 DNS 服務來路由流量時，Route 53 是理想選擇，並提供高可用性和故障轉移功能。
- **英語說明**：Route 53 is a scalable DNS and domain name management service that routes end-user traffic to AWS services and external resources while ensuring high availability through DNS failover.
- **Reference**: [Route 53 Documentation](https://aws.amazon.com/route53)

## 14. Amazon Aurora

- **適配情況**：適合需要高性能的關聯式資料庫的應用程式，提供比傳統RDS更高的吞吐量和低延遲。
- **英語說明**：Aurora is a MySQL and PostgreSQL-compatible relational database designed for the cloud, offering up to 5x the performance of standard MySQL or 3x PostgreSQL databases.
- **Reference**: [Aurora Documentation](https://aws.amazon.com/rds/aurora)

## 15. AWS Auto Scaling

- **適配情況**：適合需要自動擴展或縮減 EC2 實例的應用程式，根據需求負載自動調整資源配置。
- **英語說明**：Auto Scaling helps ensure that you have the right amount of EC2 instances running to handle the load for your applications, automatically adjusting based on traffic patterns.
- **Reference**: [Auto Scaling Documentation](https://aws.amazon.com/autoscaling)

## 16. AWS KMS (Key Management Service)

- **適配情況**：適合需要加密和解密資料的應用程式，並能管理和控制加密金鑰，適用於符合安全合規性要求的應用程式。
- **英語說明**：KMS allows you to create and manage encryption keys to secure your data, providing centralized control over the cryptographic operations within your applications.
- **Reference**: [KMS Documentation](https://aws.amazon.com/kms)

## 17. AWS Trusted Advisor

- **適配情況**：適合需要優化 AWS 環境的應用程式，Trusted Advisor 提供安全、性能和成本優化的最佳建議。
- **英語說明**：Trusted Advisor provides real-time guidance to help you optimize your AWS environment across security, cost, performance, and fault tolerance.
- **Reference**: [AWS Trusted Advisor](https://aws.amazon.com/tw/premiumsupport/technology/trusted-advisor/)

## 18. Amazon SNS (Simple Notification Service)

- **適配情況**：適合需要大規模通知功能的應用程式，例如推送消息、通知使用者或觸發事件。
- **英語說明**：SNS is a fully managed messaging service that enables you to send notifications to subscribers or trigger events in response to changes in your environment.
- **Reference**: [Amazon SNS](https://aws.amazon.com/tw/sns/)

## 19. Amazon EFS (Elastic File System)

- **適配情況**：適合共享檔案系統的應用，特別是需要多個 EC2 實例同時存取的資料。
- **英語說明**：EFS provides scalable file storage that can be shared across multiple EC2 instances, offering high availability and durability.
- **Reference**: [EFS Documentation](https://aws.amazon.com/tw/efs/)
