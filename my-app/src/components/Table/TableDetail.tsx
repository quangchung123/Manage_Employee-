import _ from 'lodash';

const TableDetail = ({ dataDetail }: any) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <td>{dataDetail._id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{dataDetail.name}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{dataDetail.country}</td>
                    </tr>
                    <tr>
                        <th>Province</th>
                        <td>{dataDetail.province}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableDetail;
