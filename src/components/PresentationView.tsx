import React from 'react';
import View from '../../vendor/components/layout/View';
import { getMicroSiteId } from '../../vendor/utils/app-api';
import FAIcon from '../../vendor/components/ui/FAIcon';

type PresentationViewType = {
  onSubmit: () => void;
  prizeId: string;
  setPrizeId: (id: string) => void;
};

const PresentationView: React.FC<PresentationViewType> = ({
  onSubmit,
  prizeId,
  setPrizeId,
}) => (
  <View size={100}>
    <View fill bottom>
      <View className="w-100 mb-3" row>
        <View left className="w-40 fw-bolder">
          Prize Id
        </View>
        <View>
          <input
            id="prizeId"
            type="text"
            value={prizeId}
            onChange={e => setPrizeId(e.target.value)}
            className="form-control bg-primary-10 text-primary"
          />
        </View>
      </View>

      <View className="w-100" row>
        <View left className="w-40 fw-bolder">
          Micro Site ID
        </View>
        <View>
          <input
            id="microSiteId"
            type="text"
            readOnly
            value={getMicroSiteId()}
            className="form-control bg-dark-10 text-black w-20"
          />
        </View>
      </View>
    </View>

    <View fill bottom className="pb-5 mb-3">
      <button type="button" className="btn btn-dark px-5" onClick={onSubmit}>
        <span className="me-2 border-end pe-2 text-uppercase fw-bolder">
          Get Reward
        </span>
        <FAIcon icon="award" color="ligth" />
      </button>
    </View>
  </View>
);

export default PresentationView;
