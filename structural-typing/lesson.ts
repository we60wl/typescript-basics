// BEGIN
enum LoadingStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

type DataState =
  | { status: LoadingStatus.Loading }
  | { status: LoadingStatus.Success, data: number }
  | { status: LoadingStatus.Error, error: Error }

const handleData = (dataState: DataState) => {
  switch (dataState.status) {
    case LoadingStatus.Loading:
      return 'loading...'
    case LoadingStatus.Success:
      return String(dataState.data)
    case LoadingStatus.Error:
      return dataState.error.message
    default:
      return 'unknown'
  }
}
// END

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('some error') };
console.log(handleData(error)); // some error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42