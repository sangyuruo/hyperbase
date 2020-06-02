import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';




export default () => {
    const projectList=[{'title':'MicroProgram Cloud','desc':'小程序云,提供云函数,云存储,云分发,云数据库等Serverless开发套件'},
    {'title':'MicroService Cloud','desc':'微服务云,提供服务发现,流量治理,滚动更新,全链路追踪,熔断,负载均衡等服务'},
    {'title':'Community Software Developing','desc':'社群软件开发体系,提供DevOps和项目管理等服务'},
    {'title':'Data-driven Software Cloud','desc':'数据驱动软件开发云,提供数据处理流水线能力模块'},
    {'title':'Network Design Lab','desc':'网络设计实验室,提供计算机网络相关实验'},
    {'title':'Operations Cloud','desc':'运维云,提供运维能力'},
    {'title':'Storage Cloud','desc':'存储云,提供分布式存储和灾备能力,提供对象存储,块存储,文件系统等接口'},
    {'title':'Hardware Operations','desc':'硬件运维,提供智能硬件感知能力'},
    {'title':'IaaS Infrastructure','desc':'IaaS设施,提供云基础设施,服务传统应用上云'},
    {'title':'Multi-Tenant Mirrors','desc':'多租户镜像站,提供公有镜像和私有镜像,镜像代理和仓库管理能力'},
    {'title':'SaaS Stores','desc':'SaaS应用商店'},
    {'title':'Power Hub','desc':'能力中心,提供API,提供公有云上开发模块'},
    {'title':'Capsino Capitalism','desc':'金融云平台,提供分布式金融框架'},
    {'title':'AIoT Cloud','desc':'AIoT云,提供现实环境处理能力'},
    {'title':'Knowledge Power Hub','desc':'知识能力中心,提供教育,直播,考试等教育领域能力'},]
    return (
        <div>
            <Card
                style={{ width: '100%' }}
            >
                {projectList.map(item => (
          <Card.Grid >
            <Card
              bodyStyle={{
                padding: 0,
                height:100
              }}
              bordered={false}
            >
              <Card.Meta
                title={item.title}
                description={item.desc}
              />
            
            </Card>
          </Card.Grid>
        ))}
            </Card>
        </div>
    );
}
