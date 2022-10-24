import { defineStore } from 'pinia';
import axios from 'axios';
import routing from '../fosRouting';

const userLocal = JSON.parse(localStorage.getItem('userGen'));
const initialState = userLocal ?? null;
export const CusStore = defineStore('cusStore', {
  state: () => {
    const hasData = initialState ? initialState.length !== 0 : false;
    return {
      genName: hasData ? initialState.genName : null,
      lotNumber: hasData ? initialState.lotNumber : null,
      calibrationDate: hasData ? new Date(initialState.calibrationDate) : new Date(),
      deliveryDate: hasData ? new Date(initialState.deliveryDate) : new Date(),
      expirationDate: hasData ? new Date(initialState.expirationDate) : new Date(),
      elutionDate: hasData ? initialState.elutionDate ? new Date(initialState.elutionDate) : null : null,
      logo: hasData ? initialState.logo : null,
      genSize: hasData ? initialState.genSize : 0
    };
  },
  getters: {
    hasElution: (state) => state.elutionDate ?? null,
    hasCurrentGen: (state) => state.genName ?? null
  },
  actions: {
    async getInitialData () {
      await axios.get(routing.generate('cus_current_gen')).then(response => {
        localStorage.setItem('userGen', JSON.stringify(response.data));
        this.genName = response.data.genName;
        this.genSize = response.data.genSize;
        this.lotNumber = response.data.lotNumber;
        this.calibrationDate = new Date(response.data.calibrationDate);
        this.deliveryDate = new Date(response.data.deliveryDate);
        this.expirationDate = new Date(response.data.expirationDate);
        this.elutionDate = response.data.elutionDate ? new Date(response.data.elutionDate) : null;
        this.logo = response.data.logo;
      });
    },
    setNewElutionDate (date) {
      this.elutionDate = date;
      const userLocal = JSON.parse(localStorage.getItem('userGen'));
      userLocal.elutionDate = date;
      localStorage.setItem('userGen', JSON.stringify(userLocal));
    },
    setNewData (response) {
      localStorage.setItem('userGen', JSON.stringify(response.data));
      this.genName = response.data.genName;
      this.genSize = response.data.genSize;
      this.lotNumber = response.data.lotNumber;
      this.calibrationDate = new Date(response.data.calibrationDate);
      this.deliveryDate = new Date(response.data.deliveryDate);
      this.expirationDate = new Date(response.data.expirationDate);
      this.elutionDate = response.data.elutionDate ? new Date(response.data.elutionDate) : null;
      this.logo = response.data.logo;
    }
  }
});
