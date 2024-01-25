import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		char[] stack = br.readLine().toCharArray();
		char[] comp = br.readLine().toCharArray();

		int top = 0;
		int compIdx = comp.length - 1;

		for (int i = 0; i < stack.length; i++) {
			if (top != i) stack[top] = stack[i];
			if (top >= compIdx && stack[i] == comp[compIdx]) {
				boolean flag = true;
				for (int j = 1; j <= compIdx; j++) {
					if (stack[top - j] != comp[compIdx - j]) {
						flag = false;
						break;
					}
				}
				if (flag) top -= comp.length;
			}
			top++;
		}

		if (top == 0) sb.append("FRULA");
		else {
			for (int i = 0; i < top; i++) {
				sb.append(stack[i]);
			}
		}
		
		System.out.print(sb);
	}

}
