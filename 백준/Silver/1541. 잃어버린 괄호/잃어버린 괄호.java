import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String str = br.readLine();

		String[] numStr = str.split("-");

		int result = 0;
		for (int i = 0; i < numStr.length; i++) {
			int sum = 0;
			if (numStr[i].contains("+")) {
				for (String n : numStr[i].split("[+]")) {
					sum += Integer.parseInt(n);
				}
			}
			else sum += Integer.parseInt(numStr[i]);
			if (i == 0) result += sum;
			else result -= sum;
		}
		System.out.print(result);
	}

}
