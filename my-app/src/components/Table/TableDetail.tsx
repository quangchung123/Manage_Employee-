import _ from 'lodash';

const TableDetail = ({ dataDetail }: any) => {
    const rowData = _.get(dataDetail, '[0]', {});
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>#</th>
                    <th>{rowData.id}</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>{rowData.name}</th>
                </tr>
                <tr>
                    <th>Country</th>
                    <th>{rowData.country}</th>
                </tr>
                <tr>
                    <th>Province</th>
                    <th>{rowData.province}</th>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableDetail;
