import { TokenOperations } from "./SDK/struct/token-operation-map";
import { Plugin } from "./SDK/struct/Plugin";
declare function transfer_tokens(targetAddress: string, amount: number, tokenID: number): void;
declare function mint_tokens(tokenID: number, amount: number, targetAddress: string): void;
declare function create_token_class(tokenName: string, tokenVotingWeight: number, tokenDividendWeight: number): void;
declare function withdraw_dividends(): void;
declare function withdraw_money(amount: number): void;
declare function withdraw_money_and_send_to_address(amount: number, targetAddress: string): void;
declare function pay_money(amount: number): void;
declare function enable_plugin_index(pluginIndex: number): void;
declare function disable_plugin_index(pluginIndex: number): void;
declare function add_plugin(currentRestrictionPlugin: Plugin): void;
declare function add_and_enable_plugin(currentRestrictionPlugin: Plugin): void;
declare function burn_tokens(tokenID: number, amount: number, targetAddress: string): void;
declare function batch_transfer_tokens(tokenOperations: TokenOperations): void;
declare function batch_mint_tokens(tokenOperations: TokenOperations): void;
declare function batch_burn_tokens(tokenOperations: TokenOperations): void;
declare function call_emergency(emergency_id: number): void;
declare function set_parameter(parameter: string, value: string): void;
declare function add_to_member_list(alias: string, role: string, address: string): void;
declare function modify_member_list(alias: string, role: string, address: string): void;
declare function suspend_member_list(address: string): void;
declare function reactivate_member_list(address: string): void;
export { transfer_tokens, mint_tokens, create_token_class, withdraw_dividends, withdraw_money, withdraw_money_and_send_to_address, pay_money, enable_plugin_index, disable_plugin_index, add_plugin, add_and_enable_plugin, burn_tokens, batch_transfer_tokens, batch_mint_tokens, batch_burn_tokens, call_emergency, set_parameter, add_to_member_list, modify_member_list, suspend_member_list, reactivate_member_list };
//# sourceMappingURL=instructions.d.ts.map