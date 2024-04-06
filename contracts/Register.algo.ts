import { Contract } from '@algorandfoundation/tealscript';

type MetaData = { key: string; data: string };

// eslint-disable-next-line no-unused-vars
class Register extends Contract {
  metaData = BoxMap<uint64, MetaData>();

  myMeta = GlobalStateKey<MetaData>();

  addData(box: uint64, key: string, data: string): void {
    const meta: MetaData = {
      key: key,
      data: data,
    };
    this.myMeta.value = meta;
    assert(!this.metaData(box).exists);
    this.metaData(box).value = meta;
  }

  getData(box: uint64): MetaData {
    const meta = this.metaData(box).value;
    return meta;
  }
}
