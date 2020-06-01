import React from "react";
import styles from "./index.less";
import { Table, Input, InputNumber, Popconfirm, Form } from "antd";
import request from '@/utils/request';

const data = [
  {
  "_id": "c5FKkrundst2ZB4HuObq18tT9SiRiBQTIdPbtDRZIG1B2xwp",
  "abstract": "Power-proportional cluster-based storage is an important component of an overall cloud computing infrastructure. With it, substantial subsets of nodes in the storage cluster can be turned off to save power during periods of low utilization. Rabbit is a distributed file system that arranges its data-layout to provide ideal power-proportionality down to very low minimum number of powered-up nodes (enough to store a primary replica of available datasets). Rabbit addresses the node failure rates of large-scale clusters with data layouts that minimize the number of nodes that must be powered-up if a primary fails. Rabbit also allows different datasets to use different subsets of nodes as a building block for interference avoidance when the infrastructure is shared by multiple tenants. Experiments with a Rabbit prototype demonstrate its power-proportionality, and simulation experiments demonstrate its properties at scale.",
  "keywords": {},
  "progress": 385,
  "source": "SOCC",
  "survey": {},
  "title": "Robust and flexible power-proportional storage",
  "years": "2010"
  },
  {
  "_id": "D80CyKbgxgFwukk2FtzseGqUkyquXR9Ojst4hymJvqSIE8Pj",
  "abstract": "The increasing popularity of cloud storage is leading organizations to consider moving data out of their own data centers and into the cloud. However, success for cloud storage providers can present a significant risk to customers; namely, it becomes very expensive to switch storage providers. In this paper, we make a case for applying RAID-like techniques used by disks and file systems, but at the cloud storage level. We argue that striping user data across multiple providers can allow customers to avoid vendor lock-in, reduce the cost of switching providers, and better tolerate provider outages or failures. We introduce RACS, a proxy that transparently spreads the storage load over many providers. We evaluate a prototype of our system and estimate the costs incurred and benefits reaped. Finally, we use trace-driven simulations to demonstrate how RACS can reduce the cost of switching storage vendors for a large organization such as the Internet Archive by seven-fold or more by varying erasure-coding parameters.",
  "keywords": {},
  "progress": 386,
  "source": "SOCC",
  "survey": {},
  "title": "RACS: a case for cloud storage diversity",
  "years": "2010"
  },
  {
  "_id": "Dv63elegbVZ3El0Dgn4nRA87OqQaA7tJxO8SiRY4sBC09gPL",
  "abstract": "Evaluating the resiliency of stateful Internet services to significant workload spikes and data hotspots requires realistic workload traces that are usually very difficult to obtain. A popular approach is to create a workload model and generate synthetic workload, however, there exists no characterization and model of stateful spikes. In this paper we analyze five workload and data spikes and find that they vary significantly in many important aspects such as steepness, magnitude, duration, and spatial locality. We propose and validate a model of stateful spikes that allows us to synthesize volume and data spikes and could thus be used by both cloud computing users and providers to stress-test their infrastructure.",
  "keywords": {},
  "progress": 387,
  "source": "SOCC",
  "survey": {},
  "title": "\"Characterizing, modeling, and generating workload spikes for stateful services",
  "years": "2010"
  }
  ];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`
//   });
// }
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: "" };
    this.columns = [
      {
        title: "title",
        dataIndex: "title",
        width: "15%",
        editable: true
      },
      {
        title: "abstract",
        dataIndex: "abstract",
        width: "40%",
        editable: true
      },
      {
        title: "years",
        dataIndex: "years",
        width: "40%",
        editable: true
      },
      {
        title: "source",
        dataIndex: "source",
        width: "40%",
        editable: true
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="Sure to cancel?"
                onConfirm={() => this.cancel(record.key)}
              >
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a
              disabled={editingKey !== ""}
              onClick={() => this.edit(record.key)}
            >
              Edit
            </a>
          );
        }
      }
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-edit-row">
      <EditableFormTable />
    </div>
  </div>
);
