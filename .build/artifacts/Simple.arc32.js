"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSpec = void 0;
exports.appSpec = {
    "hints": {
        "incr(uint64)void": {
            "call_config": {
                "no_op": "CALL"
            }
        },
        "decr(uint64)void": {
            "call_config": {
                "no_op": "CALL"
            }
        },
        "add(uint256,uint256)uint256": {
            "call_config": {
                "no_op": "CALL"
            }
        },
        "sub(uint256,uint256)uint256": {
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
                "counter": {
                    "type": "uint64",
                    "key": "counter"
                }
            },
            "reserved": {}
        }
    },
    "state": {
        "global": {
            "num_byte_slices": 0,
            "num_uints": 1
        },
        "local": {
            "num_byte_slices": 0,
            "num_uints": 0
        }
    },
    "source": {
        "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjg4LjEKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJZXJyCgovLyBpbmNyZW1lbnRDb3VudGVyKGk6IHVpbnQ2NCk6IHZvaWQKaW5jcmVtZW50Q291bnRlcjoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9jb250cmFjdC5hbGdvLnRzOjcKCS8vIHRoaXMuY291bnRlci52YWx1ZSA9IHRoaXMuY291bnRlci52YWx1ZSArIGkKCWJ5dGUgMHg2MzZmNzU2ZTc0NjU3MiAvLyAiY291bnRlciIKCWR1cAoJYXBwX2dsb2JhbF9nZXQKCWZyYW1lX2RpZyAtMSAvLyBpOiB1aW50NjQKCSsKCWFwcF9nbG9iYWxfcHV0CglyZXRzdWIKCi8vIGluY3IodWludDY0KXZvaWQKKmFiaV9yb3V0ZV9pbmNyOgoJLy8gaTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBpbmNyKHVpbnQ2NCl2b2lkCgljYWxsc3ViIGluY3IKCWludCAxCglyZXR1cm4KCi8vIGluY3IoaTogdWludDY0KTogdm9pZAppbmNyOgoJcHJvdG8gMSAwCgoJLy8gY29udHJhY3RzL2NvbnRyYWN0LmFsZ28udHM6MTEKCS8vIHRoaXMuaW5jcmVtZW50Q291bnRlcihpKQoJZnJhbWVfZGlnIC0xIC8vIGk6IHVpbnQ2NAoJY2FsbHN1YiBpbmNyZW1lbnRDb3VudGVyCglyZXRzdWIKCi8vIGRlY3IodWludDY0KXZvaWQKKmFiaV9yb3V0ZV9kZWNyOgoJLy8gaTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBkZWNyKHVpbnQ2NCl2b2lkCgljYWxsc3ViIGRlY3IKCWludCAxCglyZXR1cm4KCi8vIGRlY3IoaTogdWludDY0KTogdm9pZApkZWNyOgoJcHJvdG8gMSAwCgoJLy8gY29udHJhY3RzL2NvbnRyYWN0LmFsZ28udHM6MTUKCS8vIHRoaXMuY291bnRlci52YWx1ZSA9IHRoaXMuY291bnRlci52YWx1ZSAtIGkKCWJ5dGUgMHg2MzZmNzU2ZTc0NjU3MiAvLyAiY291bnRlciIKCWR1cAoJYXBwX2dsb2JhbF9nZXQKCWZyYW1lX2RpZyAtMSAvLyBpOiB1aW50NjQKCS0KCWFwcF9nbG9iYWxfcHV0CglyZXRzdWIKCi8vIGFkZCh1aW50MjU2LHVpbnQyNTYpdWludDI1NgoqYWJpX3JvdXRlX2FkZDoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZSAweDE1MWY3Yzc1CgoJLy8gYjogdWludDI1NgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJZHVwCglsZW4KCWludCAzMgoJPT0KCWFzc2VydAoKCS8vIGE6IHVpbnQyNTYKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyBleGVjdXRlIGFkZCh1aW50MjU2LHVpbnQyNTYpdWludDI1NgoJY2FsbHN1YiBhZGQKCWR1cAoJYml0bGVuCglpbnQgMjU2Cgk8PQoJYXNzZXJ0CglieXRlIDB4RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRgoJYiYKCWR1cAoJbGVuCglkdXAKCWludCAzMgoJLQoJc3dhcAoJc3Vic3RyaW5nMwoJY29uY2F0Cglsb2cKCWludCAxCglyZXR1cm4KCi8vIGFkZChhOiB1aW50MjU2LCBiOiB1aW50MjU2KTogdWludDI1NgphZGQ6Cglwcm90byAyIDEKCgkvLyBjb250cmFjdHMvY29udHJhY3QuYWxnby50czoxOQoJLy8gcmV0dXJuIGEgKyBiOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQyNTYKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50MjU2CgliKwoJcmV0c3ViCgovLyBzdWIodWludDI1Nix1aW50MjU2KXVpbnQyNTYKKmFiaV9yb3V0ZV9zdWI6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIGI6IHVpbnQyNTYKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyBhOiB1aW50MjU2Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gZXhlY3V0ZSBzdWIodWludDI1Nix1aW50MjU2KXVpbnQyNTYKCWNhbGxzdWIgc3ViCglkdXAKCWJpdGxlbgoJaW50IDI1NgoJPD0KCWFzc2VydAoJYnl0ZSAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYKCWImCglkdXAKCWxlbgoJZHVwCglpbnQgMzIKCS0KCXN3YXAKCXN1YnN0cmluZzMKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBzdWIoYTogdWludDI1NiwgYjogdWludDI1Nik6IHVpbnQyNTYKc3ViOgoJcHJvdG8gMiAxCgoJLy8gY29udHJhY3RzL2NvbnRyYWN0LmFsZ28udHM6MjMKCS8vIHJldHVybiBhIC0gYjsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50MjU2CglmcmFtZV9kaWcgLTIgLy8gYjogdWludDI1NgoJYi0KCXJldHN1YgoKKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCWludCAxCglyZXR1cm4KCipjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgllcnIKCipjYWxsX05vT3A6CgltZXRob2QgImluY3IodWludDY0KXZvaWQiCgltZXRob2QgImRlY3IodWludDY0KXZvaWQiCgltZXRob2QgImFkZCh1aW50MjU2LHVpbnQyNTYpdWludDI1NiIKCW1ldGhvZCAic3ViKHVpbnQyNTYsdWludDI1Nil1aW50MjU2IgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9pbmNyICphYmlfcm91dGVfZGVjciAqYWJpX3JvdXRlX2FkZCAqYWJpX3JvdXRlX3N1YgoJZXJy",
        "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBjb250cmFjdHMvY29udHJhY3QuYWxnby50czoyNwovLyB0aGlzLmluY3JlbWVudENvdW50ZXIoMSkKaW50IDEKY2FsbHN1YiBpbmNyZW1lbnRDb3VudGVyCmludCAxCnJldHVybgoKLy8gaW5jcmVtZW50Q291bnRlcihpOiB1aW50NjQpOiB2b2lkCmluY3JlbWVudENvdW50ZXI6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvY29udHJhY3QuYWxnby50czo3CgkvLyB0aGlzLmNvdW50ZXIudmFsdWUgPSB0aGlzLmNvdW50ZXIudmFsdWUgKyBpCglieXRlIDB4NjM2Zjc1NmU3NDY1NzIgLy8gImNvdW50ZXIiCglkdXAKCWFwcF9nbG9iYWxfZ2V0CglmcmFtZV9kaWcgLTEgLy8gaTogdWludDY0CgkrCglhcHBfZ2xvYmFsX3B1dAoJcmV0c3Vi"
    },
    "contract": {
        "name": "Simple",
        "desc": "",
        "methods": [
            {
                "name": "incr",
                "args": [
                    {
                        "name": "i",
                        "type": "uint64"
                    }
                ],
                "returns": {
                    "type": "void"
                }
            },
            {
                "name": "decr",
                "args": [
                    {
                        "name": "i",
                        "type": "uint64"
                    }
                ],
                "returns": {
                    "type": "void"
                }
            },
            {
                "name": "add",
                "args": [
                    {
                        "name": "a",
                        "type": "uint256"
                    },
                    {
                        "name": "b",
                        "type": "uint256"
                    }
                ],
                "returns": {
                    "type": "uint256"
                }
            },
            {
                "name": "sub",
                "args": [
                    {
                        "name": "a",
                        "type": "uint256"
                    },
                    {
                        "name": "b",
                        "type": "uint256"
                    }
                ],
                "returns": {
                    "type": "uint256"
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
};
//# sourceMappingURL=Simple.arc32.js.map