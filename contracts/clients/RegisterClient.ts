/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "addData(uint64,string,string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getData(uint64)(string,string)": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "myMeta": {
          "type": "bytes",
          "key": "myMeta"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjg4LjEKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJZXJyCgovLyBhZGREYXRhKHVpbnQ2NCxzdHJpbmcsc3RyaW5nKXZvaWQKKmFiaV9yb3V0ZV9hZGREYXRhOgoJLy8gZGF0YTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglleHRyYWN0IDIgMAoKCS8vIGtleTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglleHRyYWN0IDIgMAoKCS8vIGJveDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBhZGREYXRhKHVpbnQ2NCxzdHJpbmcsc3RyaW5nKXZvaWQKCWNhbGxzdWIgYWRkRGF0YQoJaW50IDEKCXJldHVybgoKLy8gYWRkRGF0YShib3g6IHVpbnQ2NCwga2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IHZvaWQKYWRkRGF0YToKCXByb3RvIDMgMAoKCS8vIFB1c2ggZW1wdHkgYnl0ZXMgYWZ0ZXIgdGhlIGZyYW1lIHBvaW50ZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgbG9jYWwgdmFyaWFibGVzCglieXRlIDB4CgoJLy8gY29udHJhY3RzL1JlZ2lzdGVyLmFsZ28udHM6MTIKCS8vIG1ldGE6IE1ldGFEYXRhID0gewoJLy8gICAgICAga2V5OiBrZXksCgkvLyAgICAgICBkYXRhOiBkYXRhLAoJLy8gICAgIH0KCWJ5dGUgMHggLy8gaW5pdGlhbCBoZWFkCglieXRlIDB4IC8vIGluaXRpYWwgdGFpbAoJYnl0ZSAweDAwMDQgLy8gaW5pdGlhbCBoZWFkIG9mZnNldAoJZnJhbWVfZGlnIC0yIC8vIGtleTogc3RyaW5nCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJY2FsbHN1YiAqcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQKCWZyYW1lX2RpZyAtMyAvLyBkYXRhOiBzdHJpbmcKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0CgljYWxsc3ViICpwcm9jZXNzX2R5bmFtaWNfdHVwbGVfZWxlbWVudAoJcG9wIC8vIHBvcCBoZWFkIG9mZnNldAoJY29uY2F0IC8vIGNvbmNhdCBoZWFkIGFuZCB0YWlsCglmcmFtZV9idXJ5IDAgLy8gbWV0YTogTWV0YURhdGEKCgkvLyBjb250cmFjdHMvUmVnaXN0ZXIuYWxnby50czoxNgoJLy8gdGhpcy5teU1ldGEudmFsdWUgPSBtZXRhCglieXRlIDB4NmQ3OTRkNjU3NDYxIC8vICJteU1ldGEiCglmcmFtZV9kaWcgMCAvLyBtZXRhOiBNZXRhRGF0YQoJYXBwX2dsb2JhbF9wdXQKCgkvLyBjb250cmFjdHMvUmVnaXN0ZXIuYWxnby50czoxNwoJLy8gYXNzZXJ0KCF0aGlzLm1ldGFEYXRhKGJveCkuZXhpc3RzKQoJZnJhbWVfZGlnIC0xIC8vIGJveDogdWludDY0CglpdG9iCglib3hfbGVuCglzd2FwCglwb3AKCSEKCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9SZWdpc3Rlci5hbGdvLnRzOjE4CgkvLyB0aGlzLm1ldGFEYXRhKGJveCkudmFsdWUgPSBtZXRhCglmcmFtZV9kaWcgLTEgLy8gYm94OiB1aW50NjQKCWl0b2IKCWR1cAoJYm94X2RlbAoJcG9wCglmcmFtZV9kaWcgMCAvLyBtZXRhOiBNZXRhRGF0YQoJYm94X3B1dAoJcmV0c3ViCgovLyBnZXREYXRhKHVpbnQ2NCkoc3RyaW5nLHN0cmluZykKKmFiaV9yb3V0ZV9nZXREYXRhOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlIDB4MTUxZjdjNzUKCgkvLyBib3g6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgZ2V0RGF0YSh1aW50NjQpKHN0cmluZyxzdHJpbmcpCgljYWxsc3ViIGdldERhdGEKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBnZXREYXRhKGJveDogdWludDY0KTogTWV0YURhdGEKZ2V0RGF0YToKCXByb3RvIDEgMQoKCS8vIFB1c2ggZW1wdHkgYnl0ZXMgYWZ0ZXIgdGhlIGZyYW1lIHBvaW50ZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgbG9jYWwgdmFyaWFibGVzCglieXRlIDB4CgoJLy8gY29udHJhY3RzL1JlZ2lzdGVyLmFsZ28udHM6MjIKCS8vIG1ldGEgPSB0aGlzLm1ldGFEYXRhKGJveCkudmFsdWUKCWZyYW1lX2RpZyAtMSAvLyBib3g6IHVpbnQ2NAoJaXRvYgoJZnJhbWVfYnVyeSAwIC8vIHN0b3JhZ2Uga2V5Ly9tZXRhCgoJLy8gY29udHJhY3RzL1JlZ2lzdGVyLmFsZ28udHM6MjMKCS8vIHJldHVybiBtZXRhOwoJZnJhbWVfZGlnIDAgLy8gc3RvcmFnZSBrZXkvL21ldGEKCWJveF9nZXQKCWFzc2VydAoKCS8vIHNldCB0aGUgc3Vicm91dGluZSByZXR1cm4gdmFsdWUKCWZyYW1lX2J1cnkgMAoJcmV0c3ViCgoqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJaW50IDEKCXJldHVybgoKKmNyZWF0ZV9Ob09wOgoJbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbigpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKKmNhbGxfTm9PcDoKCW1ldGhvZCAiYWRkRGF0YSh1aW50NjQsc3RyaW5nLHN0cmluZyl2b2lkIgoJbWV0aG9kICJnZXREYXRhKHVpbnQ2NCkoc3RyaW5nLHN0cmluZykiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2FkZERhdGEgKmFiaV9yb3V0ZV9nZXREYXRhCgllcnIKCipwcm9jZXNzX2R5bmFtaWNfdHVwbGVfZWxlbWVudDoKCXByb3RvIDQgMwoJZnJhbWVfZGlnIC00IC8vIHR1cGxlIGhlYWQKCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJY29uY2F0CglmcmFtZV9idXJ5IC00IC8vIHR1cGxlIGhlYWQKCWZyYW1lX2RpZyAtMSAvLyBlbGVtZW50CglkdXAKCWxlbgoJZnJhbWVfZGlnIC0yIC8vIGhlYWQgb2Zmc2V0CglidG9pCgkrCglpdG9iCglleHRyYWN0IDYgMgoJZnJhbWVfYnVyeSAtMiAvLyBoZWFkIG9mZnNldAoJZnJhbWVfZGlnIC0zIC8vIHR1cGxlIHRhaWwKCXN3YXAKCWNvbmNhdAoJZnJhbWVfYnVyeSAtMyAvLyB0dXBsZSB0YWlsCglmcmFtZV9kaWcgLTQgLy8gdHVwbGUgaGVhZAoJZnJhbWVfZGlnIC0zIC8vIHR1cGxlIHRhaWwKCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJcmV0c3Vi",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "Register",
    "desc": "",
    "methods": [
      {
        "name": "addData",
        "args": [
          {
            "name": "box",
            "type": "uint64"
          },
          {
            "name": "key",
            "type": "string"
          },
          {
            "name": "data",
            "type": "string"
          }
        ],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "getData",
        "args": [
          {
            "name": "box",
            "type": "uint64"
          }
        ],
        "returns": {
          "type": "(string,string)"
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the Register smart contract.
 */
export type Register = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'addData(uint64,string,string)void' | 'addData', {
      argsObj: {
        box: bigint | number
        key: string
        data: string
      }
      argsTuple: [box: bigint | number, key: string, data: string]
      returns: void
    }>
    & Record<'getData(uint64)(string,string)' | 'getData', {
      argsObj: {
        box: bigint | number
      }
      argsTuple: [box: bigint | number]
      returns: [string, string]
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'myMeta'?: BinaryState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type RegisterSig = keyof Register['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends RegisterSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Register smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends RegisterSig> = Register['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Register smart contract to the method's return type
 */
export type MethodReturn<TSignature extends RegisterSig> = Register['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type RegisterCreateCalls = (typeof RegisterCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type RegisterCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type RegisterDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: RegisterCreateCalls) => RegisterCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class RegisterCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Register smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the addData(uint64,string,string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static addData(args: MethodArgs<'addData(uint64,string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'addData(uint64,string,string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.box, args.key, args.data],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getData(uint64)(string,string) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getData(args: MethodArgs<'getData(uint64)(string,string)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getData(uint64)(string,string)' as const,
      methodArgs: Array.isArray(args) ? args : [args.box],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Register smart contract
 */
export class RegisterClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `RegisterClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Register['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Register smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: RegisterDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(RegisterCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Register smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(RegisterCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Register smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the addData(uint64,string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public addData(args: MethodArgs<'addData(uint64,string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(RegisterCallFactory.addData(args, params))
  }

  /**
   * Calls the getData(uint64)(string,string) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getData(args: MethodArgs<'getData(uint64)(string,string)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(RegisterCallFactory.getData(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Register['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get myMeta() {
        return RegisterClient.getBinaryState(state, 'myMeta')
      },
    }
  }

  public compose(): RegisterComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      addData(args: MethodArgs<'addData(uint64,string,string)void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.addData(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getData(args: MethodArgs<'getData(uint64)(string,string)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getData(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as RegisterComposer
  }
}
export type RegisterComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the addData(uint64,string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  addData(args: MethodArgs<'addData(uint64,string,string)void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): RegisterComposer<[...TReturns, MethodReturn<'addData(uint64,string,string)void'>]>

  /**
   * Calls the getData(uint64)(string,string) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getData(args: MethodArgs<'getData(uint64)(string,string)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): RegisterComposer<[...TReturns, MethodReturn<'getData(uint64)(string,string)'>]>

  /**
   * Makes a clear_state call to an existing instance of the Register smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): RegisterComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): RegisterComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<RegisterComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<RegisterComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type RegisterComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type RegisterComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
